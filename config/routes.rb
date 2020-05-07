Rails.application.routes.draw do
  root 'homes#index'

  devise_for :users

  get "/", to: 'homes#index'
  get "/users", to: 'homes#index'
  get "/users/:id", to: 'homes#index'
  
  get "/organizations", to: 'homes#index'
  get "/organizations/:id", to: 'homes#index'

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :show] do
        resources :conversations, only: [:create]
      end
    end
  end

  namespace :api do
    namespace :v1 do
      resources :organizations, only: [:index, :show]
    end
  end

end
