Rails.application.routes.draw do
  root 'homes#index'

  devise_for :users

  resources :welcomes, only: [:index]

  get "/", to: 'welcomes#index'
  get "/users", to: 'homes#index'
  get "/users/:id", to: 'homes#index'

  get "/organizations", to: 'homes#index'
  get "/organizations/:id", to: 'homes#index'

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :show]
    end
  end

  namespace :api do
    namespace :v1 do
      resources :organizations, only: [:index, :show] do
        resources :users, only: [:show]
      end
    end
  end

  resources :api do
    resources :v1 do
      resources :messages do
        member do
          post :new
        end
      end
    end
  end

  namespace :api do
    namespace :v1 do
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
    end
  end
end
