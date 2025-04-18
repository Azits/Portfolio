<?php

if (isset($_POST['nom'], $_POST['email'], $_POST['message'])) {

    $nom     = htmlspecialchars(trim($_POST['nom']));
    $email   = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars(trim($_POST['message']));

    if (!$email) {
        echo "Adresse email invalide.";
        exit;
    }


    $to = "cheikhaliabdoulanziz13@gmail.com"; 

    $subject = "📬 Nouveau message  portfolio";
    $body = "Nom : $nom\nEmail : $email\n\nMessage :\n$message";
    $headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";

    $accuse_sujet = "✅ Votre message a bien été reçu";
    $accuse_message = "Bonjour $nom,\n\nMerci pour votre message ! Je reviendrai vers vous très vite.\n\nCordialement,\nCheikh Ali Abdoul-Anzizi";


    // Envois
    $sent = mail($to, $subject, $body, $headers);
    $ack  = mail($email, $accuse_sujet, $accuse_message, $accuse_headers);

    if ($sent) {
        // ✅ Redirection après succès
        header("Location: index.html#contact?success=true");
        exit;
    } else {
        echo "Erreur lors de l'envoi du message.";
    }

} else {
    echo "Formulaire incomplet.";
}
?>
