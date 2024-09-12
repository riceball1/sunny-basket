Rails.application.routes.draw do
  root "pages#home"

  get "about", to: "pages#about"
  get "lists", to: "pages#lists"
  get "inventory", to: "pages#inventory"
end
