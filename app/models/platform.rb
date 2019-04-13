# == Schema Information
#
# Table name: platforms
#
#  id           :integer          not null, primary key
#  name         :string
#  api_base_url :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  user_id      :integer
#

class Platform < ApplicationRecord
	validates :name, presence: true
	validates :api_base_url, presence: true
	
	has_many :followed_accounts, dependent: :destroy
	belongs_to :user
end
