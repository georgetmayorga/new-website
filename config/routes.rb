Rails.application.routes.draw do
  root "lobby#show", as: :lobby
  resources :posts
end
