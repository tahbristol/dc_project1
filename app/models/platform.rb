class Platform < ApplicationRecord
  has_many :tracked_accounts
  belongs_to :user
end
