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
