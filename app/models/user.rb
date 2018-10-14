class User < ApplicationRecord
	acts_as_token_authenticatable
	
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
	
	has_many :platforms
	has_many :followed_accounts, through: :platforms
	
	def unread_posts
		Post.joins(followed_account: {platform: :user}).where(users: {id: self.id}).unread.ordered_desc
	end 
	
end

