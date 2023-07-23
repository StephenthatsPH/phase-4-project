Rails.application.routes.draw do
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#show'
  patch '/users/:id', to: 'users#update'
  get 'topprograms/', to: 'programs#topprograms'

  resources :programs, only: [:show, :index, :create]
  resources :reviews, only: [:show, :index, :create, :destroy, :update]

  get '*path',to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }
end

# Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
# Defines the root path route ("/")
# root "articles#index"