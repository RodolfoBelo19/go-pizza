import { LinearGradient } from "expo-linear-gradient";

import { KeyboardAvoidingView, Platform } from "react-native";

import theme from "../../theme";

import { 
  Brand, 
  Content, 
  Title, 
  ForgotPasswordButton, 
  ForgotLabel 
} from "./style";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignIn() {
  return (
    <LinearGradient 
    colors={theme.COLORS.GRADIENT}
    start={{x:0, y:1}}
    end={{x:0.5, y:0.5}}
    style={{
      flex: 1,
      justifyContent: 'center',
    }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Content>
          <Brand source={require('@assets/brand.png')}/>

          <Title>Login</Title>

          <Input
            placeholder="E-mail"
            type="secondary"
            autoCorrect={false}
            autoCapitalize="none"
          />

          <Input
            placeholder="Senha"
            type="secondary"
            secureTextEntry
          />

          <ForgotPasswordButton>
            <ForgotLabel>Esqueci a senha</ForgotLabel>
          </ForgotPasswordButton>

          <Button
            title="Login"
            type="secondary"
          />
        </Content>
      </KeyboardAvoidingView>
    </LinearGradient>
  )
}