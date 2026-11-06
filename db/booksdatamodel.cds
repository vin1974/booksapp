namespace db.books;

entity Books{
    key ID          : UUID;
    title           : String;
    author          : String;
    isn             : String;
    price           : Decimal(10,2);
    publishDate     : DateTime; 
}
