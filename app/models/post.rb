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
	
	scope :unread, -> {
		where(marked_as_read: false)
	}
	
	scope :ordered_desc, -> {
		order('timestamp DESC')
	}

end
