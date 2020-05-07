require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
    first_name { 'Kobe' }
    last_name { 'Bryant' }
    role { 'volunteer' }
  end

end
