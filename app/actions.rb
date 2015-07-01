# Homepage (Root path)
set :method_override, true

get '/' do
  erb :index
end

get '/contacts' do
  Contact.all.to_json
end

get '/contacts/find/:id' do
  contact = Contact.where(id: params[:id]).to_json  
end

get '/contacts/search/:last_name' do
  contact = Contact.where(last_name: params[:last_name]).limit(1).to_json
end

post '/contacts/delete/:id' do
  contact = Contact.find(params[:id])
  contact.destroy  
  response = params[:id]
end

post '/contact/add' do
  response = {result: false}
  first_name = params[:first_name]
  last_name = params[:last_name]
  email = params[:email]
  phone = params[:phone]
  contact = Contact.create first_name: first_name, last_name: last_name, phone: phone, email: email
  if contact
    response[:result] = true
    response[:id] = contact.id
  end  
  puts response.to_json
  return response.to_json
end

