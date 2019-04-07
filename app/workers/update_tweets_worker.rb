class UpdateTweetsWorker
  include Sidekiq::Worker

  def perform(*args)
    @users = User.all
    
  end
end
