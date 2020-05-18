Rails.application.routes.draw do
  root 'homes#index'

  devise_for :users, controllers: { registrations: 'users/registrations' }

  resources :welcomes, only: [:index]

  get "/", to: 'welcomes#index'
  get "/users", to: 'homes#index'
  get "/users/:id", to: 'homes#index'

  get "/organizations", to: 'homes#index'
  get "/organizations/:id", to: 'homes#index'

  namespace :user do
      root to: "welcome#index"
  end

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :show]
      resources :organizations, only: [:index, :show]
      resources :conversations do
        member do
          post :reply
          post :trash
          post :untrash
        end
        collection do
          get :trashbin
          post :empty_trash
        end
      end
      resources :messages do
        member do
          post :new
        end
      end
    end
  end
end
