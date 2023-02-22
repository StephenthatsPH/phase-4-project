Rails.application.routes.draw do
  resources :users
  resources :reviews
  resources :programs
  # resources :programs, except: [:edit, :new]
  # resources :reviews, only: [:index, :post, :patch, :delete]
  # route to test your configuration
  get '/hello', to: 'application#hello_world'
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  get '/me', to: 'users#show'
  
  get '*path',to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end

# Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
# Defines the root path route ("/")
# root "articles#index"