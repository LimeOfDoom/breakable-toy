Rails.application.routes.draw do
  root 'homes#index'

  get "/restaurants", to: 'static_pages#index'
  get "/restaurants/new", to: 'static_pages#index'
  get "/restaurants/:id", to: 'static_pages#index'
  get "/restaurants/:id/edit", to: 'static_pages#index'

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :show] do
        resources :reviews, only: [:create]
      end
    end
  end

  devise_for :users
end
