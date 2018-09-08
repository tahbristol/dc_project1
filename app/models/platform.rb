class Platform < ApplicationRecord
	validates :name, presence: true
	validates :api_base_url, presence: true
	
	has_many :followed_accounts
	belongs_to :user
end
