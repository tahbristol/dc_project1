class FollowedAccount < ApplicationRecord
	validates :account_name, presence: true
	validates :account_id, uniqueness: true
	
	has_many :posts
  belongs_to :platform
end
