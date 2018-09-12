Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	
	namespace :v1 do
		resources :posts
		resources :twitter_feed
		resources :users, only: [:new, :create]
		resource :sessions, only: [:create, :destroy]
		get '/start_feed_lookup', to: 'twitter_feed#start_feed_lookup'
	end
	

end
