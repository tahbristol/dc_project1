class User < ApplicationRecord
	acts_as_token_authenticatable
	
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
	
	has_many :platforms
	has_many :followed_accounts, through: :platforms
	
	def unread_posts
		posts = []
		self.followed_accounts.each do |account|
			account.posts.each do |post|
				if !post.marked_as_read
					posts << post
				end
			end
		end
		posts.sort_by {|key| key[:timestamp]}
	end 
	
end
