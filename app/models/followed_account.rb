class FollowedAccount < ApplicationRecord
  has_many :posts
  belongs_to :platformß
end
