class ContactsImporter
  def import
    Contact.create(first_name: 'Homer', last_name: 'Simpson', email: 'homer@homer.com', phone: '415-111-1111')
    Contact.create(first_name: 'Marge', last_name: 'Simpson', email: 'marge@marge.com', phone: '415-111-1112')
    Contact.create(first_name: 'Bart', last_name: 'Simpson', email: 'bart@bart.com', phone: '415-111-1113')
    Contact.create(first_name: 'Seymour', last_name: 'Skinner', email: 'seymour@seymour.com', phone: '415-111-1114')
    Contact.create(first_name: 'Moe', last_name: 'Sizlak', email: 'moe@moe.com', phone: '415-111-1115')
  end
end
