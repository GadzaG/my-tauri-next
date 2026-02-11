mod commands;

fn main() {
    println!("🦀 RUST: Tauri запускается...");
    
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            commands::get_user, 
            commands::get_devices1
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri");
}