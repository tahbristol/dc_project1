# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require_relative 'config/application'
require 'fileutils'

namespace :start do
	desc 'Start dev server'
	task :development do
		Dir.chdir('client') do
			sh %{npm install}
		end
		Dir.chdir('../dc_project1')do
			exec 'foreman start -f Procfile.dev'
		end
	end
end

namespace :ready_api do
	desc 'Wire up rails API'
	task :development do
		exec 'bundle install && rake db:schema:load && rake db:seed'
	end
end

task start: 'start:development'
task ready_api: 'ready_api:development'
Rails.application.load_tasks
