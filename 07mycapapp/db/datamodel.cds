namespace anubhav.db;

context master {
    
    entity employee {
        key id: String(32);
        nameFirst: String(256);
        nameMiddle: String(256);
        nameLast: String(256);
        type: String(10);
        gender: String(2);
    };

}
