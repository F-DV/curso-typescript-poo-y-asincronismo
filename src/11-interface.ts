interface Driver{
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(): void;
  isConnected(name: string): boolean;
}

class PostgresDriver implements Driver{
  constructor(
    public database: string,
    public password: string,
    public port: number
  ){}

  connect(): void {
    //Code to connect
  }
  disconnect(): void {
      //Code to disconnect
  }
  isConnected(name: string): boolean {
      //code with return
      return true;
  }
}

class OracleDriver implements Driver{
  constructor(
    public database: string,
    public password: string,
    public port: number
  ){}
  connect(): void {
    //Code to connect
  }
  disconnect(): void {
      //Code to disconnect
  }
  isConnected(name: string): boolean {
      //code with return
      return true;
  }
}
