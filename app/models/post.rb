class Post < ApplicationRecord
	validates :author, presence: true
	belongs_to :followed_account
	
	
	
	def self.get_for_user(user)
		@posts = []
		platform = Platform.where(user_id: user.id, name: "Twitter").first
		followed_accounts = platform.followed_accounts
		followed_accounts.each do |fa|
			fa.posts.each do |post|
				@posts << post
			end
		end 
		@posts
	end
end
