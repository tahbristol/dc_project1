class PostsController < ApplicationController

	def index
		@followed_accounts = current_user.platforms.collect do |pl|
			pl.followed_accounts
		end.flatten
		
		@followed_accounts.each do |fa|
			@posts = fa.posts.collect do |po|
				po
			end
		end
		
		render json: {posts: @posts}
	end
end
