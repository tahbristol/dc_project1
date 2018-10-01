class User < ApplicationRecord
	acts_as_token_authenticatable
	
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
	
	has_many :platforms
	has_many :followed_accounts, through: :platforms
	
	def unread_posts
		posts = []
		self.followed_accounts.each do |account|  #make this better via active record
			account.posts.each do |post|
				if !post.marked_as_read
					posts << post
				end
			end
		end
		posts.sort_by {|key| key[:timestamp]}.reverse!
	end 
	
end

=begin
	#need in active record 
	select *
	from posts p 
	inner join followed_accounts fa 
		on fa.id = p.followed_account_id 
	inner join platforms pl 
	 on pl.id = fa.platform_id
	inner join users u 
		on u.id = pl.user_id
=end
