use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize)]
pub struct User {
    id: u32,
    name: String,
    email: String,
}

#[derive(Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Device {
    serial_number: String,
    is_online: bool,
    total_memory: u64,
    usage_memory: u64,
    battery: u8,
}

#[tauri::command]
pub fn get_devices1() -> Vec<Device> {
    vec![
        Device {
            serial_number: "ABC123".to_string(),
            is_online: true,
            total_memory: 16000,
            usage_memory: 8000,
            battery: 87,
        },
        Device {
            serial_number: "XYZ789".to_string(),
            is_online: false,
            total_memory: 8000,
            usage_memory: 2000,
            battery: 45,
        },
    ]
}

#[tauri::command]
pub fn get_user(id: u32) -> User {
    User {
        id,
        name: "John Doe".into(),
        email: "john@example.com".into(),
    }
}
