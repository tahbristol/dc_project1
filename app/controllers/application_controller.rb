class ApplicationController < ActionController::Base
	protect_from_forgery with: :null_session
	
	def user_id_lookup(username)
		userInfo = Twitter.getUserInfo(username)
		userId = userInfo.id
	end
	
	
	
end
