class V1::PostsController < ApplicationController
	def index
		if current_user
			@post = Post.all #[{"author":"tyler", "content":"dev"}, {"author":"Ali", "content":"son"}]
			render json: @post
		else
			head(:unauthorized)
		end
	end 
	
end