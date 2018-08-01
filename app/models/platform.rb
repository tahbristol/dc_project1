class Platform < ApplicationRecord
  has_many :followed_accounts
  belongs_to :user
end
