Rails.application.routes.draw do
  # get 'static_pages/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    # get '/api/users/:id', to: 'api/users#show'
    resources :users, only: [:create, :show, :destroy, :index]
    resource :session, only: [:create, :destroy, :show]
  end

  root "static_pages#index"
end
