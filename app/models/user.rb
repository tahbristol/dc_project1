# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :string
#  last_sign_in_ip        :string
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  authentication_token   :string(30)
#  hasFollowedAccounts    :boolean
#

class User < ApplicationRecord
	acts_as_token_authenticatable
	
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
	
	validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i }
	before_create :generate_confirmation_token
	
	has_many :platforms, dependent: :destroy
	has_many :followed_accounts, through: :platforms, dependent: :destroy
	
	def unread_posts
		Post.joins(followed_account: {platform: :user}).where(users: {id: self.id}).unread.ordered_desc
	end 
	
	def user_platform_info
		platforms = self.platforms
		followed_accounts_size = self.followed_accounts.size 
		unread_posts = self.unread_posts.size 
		{platforms: platforms, numFollowedAccounts: followed_accounts_size, numPosts: unread_posts}
	end 
	
	def user_followed_accounts_info
		followed_accounts = self.followed_accounts
		followed_accounts_info = followed_accounts.collect do |fa|
			if fa.account_name.present?
				{accountName: fa.account_name,numPosts: fa.posts.size, accountId: fa.account_id}
		 	end
	 	end
		 followed_accounts_info
	end 
	
	def generate_confirmation_token
		self.confirmation_token = SecureRandom.hex
	end 
	
	def confirmed?
		self.confirmed_at.present?
	end
  
  def disable_confirmation_token
    self.confirmation_token = nil
    self.save
  end
end

