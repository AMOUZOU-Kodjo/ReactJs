<?php
// api/send_message.php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true); // Récupère les données JSON

    $to = $data['email']; // Ou un numéro pour SMS
    $subject = $data['subject'];
    $message = $data['message'];

    // --- Logique d'envoi ---
    // Exemple pour email (simplifié)
    if (mail($to, $subject, $message)) {
        echo json_encode(['success' => true, 'message' => 'Email envoyé avec succès']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Erreur lors de l\'envoi']);
    }
    // --- Fin logique ---

} else {
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée']);
}
?>
