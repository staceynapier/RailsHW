Rails.application.routes.draw do

  scope path: "api" do
    resources :shows do
      resources :user
    end
  end

end
