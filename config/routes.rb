Rails.application.routes.draw do
  root "pages#home"

  get "about", to: "pages#about"
  get "lists", to: "pages#lists"
  get "inventory", to: "pages#inventory"

  # Catch-all route for handling 404 errors
  match "*path", to: "pages#error", via: :all
end
