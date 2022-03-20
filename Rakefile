require "bridgetown"

Bridgetown.load_tasks

# Run rake without specifying any command to execute a deploy build by default.
task default: :deploy

#
# Standard set of tasks, which you can customize if you wish:
#
desc "Build the Bridgetown site for deployment"
task :deploy => [:clean, "frontend:build"] do
  Bridgetown::Commands::Build.start
end

desc "Build the site in a test environment"
task :test do
  ENV["BRIDGETOWN_ENV"] = "test"
  Bridgetown::Commands::Build.start
end

desc "Runs the clean command"
task :clean do
  Bridgetown::Commands::Clean.start
end

namespace :frontend do
  desc "Build the frontend with Webpack for deployment"
  task :build do
    sh "yarn run webpack-build"
  end

  desc "Watch the frontend with Webpack during development"
  task :dev do
    Rake::Task['netlify:cms_proxy_server:run'].execute
    sh "yarn run webpack-dev --color"
  rescue Interrupt
  end
end

namespace :netlify do
  namespace :cms_proxy_server do
    desc 'Run Netlify CMS Proxy Server'
    task :run do
      sh 'yarn netlify-cms-proxy-server'
    end
  end
end
