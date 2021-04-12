interface User {
  id: number;
  name: string;
  img: string;
  username: string;
}

interface Card {
  card_number: string;
  cvv: number;
  expiry_date: string;
}

interface TransactionPayload {
  // Card Info
  card_number: string;
  cvv: number;
  expiry_date: string;

  // Destination User ID
  destination_user_id: number;

  // Value of the Transaction
  value: number;
}
