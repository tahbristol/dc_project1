# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require_relative 'config/application'

namespace :start do
	desc 'Start dev server'
	task :development do
		exec 'foreman start -f Procfile.dev'
	end
end

task start: 'start:development'
Rails.application.load_tasks
