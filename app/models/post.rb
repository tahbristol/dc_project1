# == Schema Information
#
# Table name: posts
#
#  id                    :integer          not null, primary key
#  author                :string
#  content               :string
#  timestamp             :string
#  social_media_platform :string
#  marked_as_read        :boolean
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#  followed_account_id   :integer
#

class Post < ApplicationRecord
  validates :author, presence: true
  belongs_to :followed_account

  scope :unread, lambda {
    where(marked_as_read: false)
  }

  scope :ordered_desc, lambda {
    order('timestamp DESC')
  }

  def mark_as_read
    self.marked_as_read = true
    if save
      true
    else
      false
    end
  end
end
