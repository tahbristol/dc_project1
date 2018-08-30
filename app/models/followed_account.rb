class FollowedAccount < ApplicationRecord
	has_many :posts
  belongs_to :platform
end
