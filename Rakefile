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
	
	desc 'Start production server'
	  task :production do
	    exec 'NPM_CONFIG_PRODUCTION=true npm run postinstall && foreman start'
	  end  
end

namespace :ready_api do
	desc 'Wire up rails API'
	task :development do
		exec 'rake db:schema:load && rake db:seed'
	end
end

namespace :servers do
	desc 'Start the two servers'
	task :development do
		exec 'foreman start -f Procfile.dev'
	end
end



task start: 'start:development'
task ready_api: 'ready_api:development'
task servers: 'servers:development'
Rails.application.load_tasks
