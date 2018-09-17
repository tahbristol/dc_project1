class User < ApplicationRecord
	acts_as_token_authenticatable
	
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
	
	has_many :platforms
	has_many :followed_accounts, through: :platforms
	
	def posts_from_followed_accounts
		posts = []
		self.followed_accounts.each do |account|
			account.posts.each do |post|
				posts << post
			end
		end
		posts
	end 
	
end
