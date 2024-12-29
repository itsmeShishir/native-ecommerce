import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{headerShown:false,tabBarIcon:({color})=><Ionicons name="home" size={24} color={color}/>}}/>
      <Tabs.Screen 
      name ="allCategory"
      options={{
        headerShown:false,
        tabBarIcon:({color})=><Ionicons name="apps-outline" size={24} color={color}/>
      }}
      />
      <Tabs.Screen name="cart" options={{headerShown:false,tabBarIcon:({color})=><Ionicons name="bag-outline" size={24} color={color}/>, tabBarBadgeStyle:{color:'#FAF6E3'},tabBarBadge:3}}/>
      <Tabs.Screen name="settings" options={{headerShown:false, tabBarIcon:({color})=><Ionicons name="settings-outline" size={24} color={color}/>}}/>
 
    </Tabs>
  );
};

export default Layout;
