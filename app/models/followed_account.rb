# == Schema Information
#
# Table name: followed_accounts
#
#  id           :integer          not null, primary key
#  account_id   :string
#  account_name :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  platform_id  :integer
#

class FollowedAccount < ApplicationRecord
	validates :account_name, presence: true
	validates :account_id, presence: true
	
  before_destroy :delete_all_posts
  
	has_many :posts
  belongs_to :platform
  
  def unread_posts
    self.posts.where(marked_as_read: false)
  end
  
  private
  
  def delete_all_posts
    self.posts.destroy_all
  end
  
end
