class Post < ApplicationRecord
	validates :author, presence: true
	belongs_to :followed_account
	
end
