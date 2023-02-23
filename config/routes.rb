Rails.application.routes.draw do
  namespace :api do
  resources :reviews
  resources :programs
  get '/hello', to: 'application#hello_world'
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#show'
  end
  
  get '*path',to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }
end

# Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
# Defines the root path route ("/")
# root "articles#index"