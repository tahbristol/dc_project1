class User < ApplicationRecord
	acts_as_token_authenticatable
	
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
	
	validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i }
	
	has_many :platforms
	has_many :followed_accounts, through: :platforms
	
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
				{accountName: fa.account_name,numPosts: fa.posts.size}
		 	end
	 	end
		 followed_accounts_info
	end 
end

