import ExpoModulesCore
import SwiftUI
import FamilyControls


// This view will be used as a native component. Make sure to inherit from `ExpoView`
// to apply the proper styling (e.g. border radius and shadows).
struct ExpoAppsView: View {
    
    @State var selection = FamilyActivitySelection()
    
    @Environment(\.presentationMode) var presentationMode
    
    
    var body: some View {
        NavigationView {
            FamilyActivityPicker(selection: $selection)
            // 2. Add the Navigation Title
                .navigationTitle("Select Apps")
                .navigationBarTitleDisplayMode(.inline)
            
            // 3. Add the Toolbar buttons
                .toolbar {
                    // The Cancel/Close Button (Top Left)
                    ToolbarItem(placement: .cancellationAction) {
                        Button("Close") {
                            // Close the view
                            presentationMode.wrappedValue.dismiss()
                        }
                    }
                    
                    // The Done/Accept Button (Top Right)
                    ToolbarItem(placement: .confirmationAction) {
                        Button("Done") {
                            // Save selection and close
                            saveSelection()
                            presentationMode.wrappedValue.dismiss()
                        }
                    }
                }
        }
        .foregroundStyle(.black)
    }
    
    func saveSelection() {
        // Call your method to send data back to React Native/Expo here
        print("User selected: \(selection)")
        
        // I won't implement the code to send this back to the Javascript side but
        // you can check out those at https://docs.expo.dev/modules/module-api/#sending-events
    }
    
}

